'use strict';
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const results = [];
const BULK_FILE_PATH = path.join(__dirname,'/rooms-csv.csv');
module.exports = {

  up: async (queryInterface, Sequelize) => {
   
      await new Promise((resolve, reject)=>{
       
        fs.createReadStream(BULK_FILE_PATH)
        .pipe(csv())
        .on('data', (data) =>{
          let obj = {
            'title' : data.title,
            //'loding_type':data.type,
            'star_avg': Number(data.star),
            'adult_num':Number(data.guest),
            'kid_num':Number(data.guest),
            'infant_num':Number(data.guest),
            'price':data.price,
            'pic_id':data.thumbnail,
            'createdAt' : new Date(),
            'updatedAt' : new Date(),
          }
          console.log("obj");
          results.push(obj);
        })
        .on('end', ()=>{
          resolve();
        })
      })

      console.log("results ", results)
      return queryInterface.bulkInsert('lodgings', results, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('lodgings', null, {});
  },

  
};
