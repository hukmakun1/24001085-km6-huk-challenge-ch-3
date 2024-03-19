const express = require("express");
// read file
const cars = require("./data/mobil.json");
const route = require("./route");

/* initiate express app */
const app = express();
const port = 7873;

/* Enable request body (JSON) */
app.use(express.json());
/* 
    Enable static
    Membuat folder public directory terloaded, jika tidak terloaded
    akan membuat index.html tidak bisa diakses di public directory 
*/

app.use(express.static("public"));

/* Add routes */

/* Get/cars, menampilkan data cars */
/* Get/cars/:id, menampilkan 1 data cars berdasarkan id */
/* Post/cars, menambahkan data baru (reload = ilang) */
/* Put/cars/:id, mengubah data yang ada berdasarkan id (reload = ilang) */
/* Delete/cars/:id, mengubah data yang ada berdasarkan id (reload = ilang) */
app.use("/", route);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
