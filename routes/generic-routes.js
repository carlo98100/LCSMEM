/*
    When you use generic routes, you are more exposed security-wise. 
    Limit which roles / states access which routes with ACL.
    Also be aware that concatenating the table names opens to SQL-injections. 
    There are connectors with table name replacement too, but none that I know of for SQLite.
    The concatenation of columns below is actually safe, 
    since only the keys are concatenated; the values are replaced.
*/

module.exports = function (server, db) {
  server.get("/data/events/:artistId", (req, res) => {
    let query = `select distinct
		e.Id as eventId,
		e.StreetName as eventStreetName,
		e.StreetNumber as eventStreetNumber,
		e.ZipCode as eventZipCode,
		e.City as eventCity,
		e.Date as eventDate,
		case
			when e.LiveStream == 1 then 'true'
			else 'false'
		end as IsLiveStream,
		e.AmountOfTickets as eventTotalAmountOfTickets,
		e.AmountOfTickets - (select count(*) from Ticket where eventid = e.id) as AvailableTickets
		from Event e
		where e.ArtistId = ${req.params.artistId}
		order by e.Date asc;`;

    let result = db.prepare(query).all();
    res.json(result);
  });

  server.get("/data/:table", (req, res) => {
    let query = "SELECT * FROM " + req.params.table;
    let result = db.prepare(query).all();
    res.json(result);
  });

  server.get("/data/Ticket/:UserId", (req, res) => {
    let query = `SELECT * FROM TicketInformation WHERE userId = ${req.params.UserId}`;
    let result = db.prepare(query).all();
    res.json(result);
  });


	server.post("/data/:table", (req, res) => {
		// limit which tables to query with ACL
		let query = `INSERT INTO ${req.params.table} (${Object.keys(req.body).join(", ")}) VALUES(@${Object.keys(req.body).join(", @")})`;
		let result;
		try {
			result = db.prepare(query).run(req.body);
		} catch (e) {
			console.error(e);
		}
		res.json(result);
	});

  server.post("/data/:table", (req, res) => {
    // limit which tables to query with ACL
    let query = `INSERT INTO ${req.params.table} (${Object.keys(req.body).join(
      ", "
    )}) VALUES(@${Object.keys(req.body).join(", @")})`;
    let result;
    try {
      result = db.prepare(query).run(req.body);
    } catch (e) {
      console.error(e);
    }
    res.json(result);
  });

  server.put("/data/:table/:id", (req, res) => {
    // limit which tables to query with ACL
    req.body.id = req.params.id; // move/replace the id into the body so it can be passed with the other replacements
    let query = `UPDATE ${req.params.table} SET`;
    for (let key of Object.keys(req.body)) {
      query += ` ${key}=@${key},`;
    }
    query = query.replace(/\,$/, "");
    query += ` WHERE id = @id`;
    let result;
    try {
      result = db.prepare(query).run(req.body);
    } catch (e) {
      console.error(e);
    }
    res.json(result);
  });

  server.delete("/data/:table/:id", (req, res) => {
    let query = "DELETE FROM " + req.params.table + " WHERE id = @id";
    let result;
    try {
      result = db.prepare(query).run({ id: req.params.id });
    } catch (e) {
      console.error(e);
    }
    res.json(result);
  });
};
