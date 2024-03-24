// import pool from "../config/database.js";

// export const getChildren = (req, res) => {
//   pool.query("SELECT * FROM children", (err, results) => {
//     if (err) {
//       console.error("Error fetching children:", err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     res.json(results);
//   });
// };

// export const getChild = (req, res) => {
//   pool.query(
//     "SELECT * FROM children WHERE id = ?",
//     [req.params.id],
//     (err, results) => {
//       if (err) {
//         console.error("Error fetching child:", err);
//         res.status(500).json({ error: "Internal server error" });
//         return;
//       }
//       if (results.length === 0) {
//         res.status(404).json({ error: "Child not found" });
//         return;
//       }
//       res.json(results[0]);
//     }
//   );
// };

// export const deleteChild = (req, res) => {
//   pool.query(
//     "DELETE FROM children WHERE id = ?",
//     [req.params.id],
//     (err, result) => {
//       if (err) {
//         console.error("Error deleting child:", err);
//         res.status(500).json({ error: "Internal server error" });
//         return;
//       }
//       res.status(204).end();
//     }
//   );
// };
