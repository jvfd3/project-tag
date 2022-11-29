/*
    Este código está sendo desenvolvido como parte da disciplina
    Paradigma Orientado a Objetos para Desenvolvimento de Software,
    ministrada pelo Professor Doutor Ausberto Silverio Castro Vera,
    no bacharelado de Ciência da Computação da
    Universidade Estadual do Norte Fluminense Darcy Ribeiro.
    O aluno responsável se chama João Vítor Fernandes Dias.
    O nome do projeto é "TAG".
      novembro de 2022.
*/

import React from 'react';
/*  ToDo:
1.
  Estou tentando salvar coisas em arquivo há mais de 2 horas. Desisto
  Salvar em um arquivo json externo
*/


import data from './../database/db_username_password.json'
var db_username_password = data;

const saveData_JSON = (data: Object, file: string) => {
  // import fs from "fs";
  // import * as fs from 'fs';
  // import * as fs from 'node:fs/promises';
  // import { saveAs } from 'file-saver';
  // import * as fs from 'fs'
  // import fs from 'fs';
  // import { promises as fsPromises } from 'fs'
  // console.log(fs.readFile)
  // const fs = require('fs')
  // console.log(fs)
  // require("fs").writeFile("demo.txt", "Foo bar!");
  // const jsonData = JSON.stringify(data, null, 2);
  // fs.writeFileSync(file, jsonData);
}


function checkExistance(account_data: any) {

  // const jsonData = JSON.stringify(data, null, 2);
  let found_a_match = false
  for (let index in db_username_password) {
    let db_elem = db_username_password[index]
    let db_user = db_elem.username
    let db_pswd = db_elem.password
    let user_matches = db_user === account_data.username
    let pswd_matches = db_pswd === account_data.password
    // console.log(user_matches, pswd_matches)
    if (user_matches && pswd_matches) {
      found_a_match = true
      // break;
    }
  }
  return found_a_match
}

function saveAccount(account_data: any) {
  // const jsonData = JSON.stringify(data, null, 2);

  // let exists = Object.values(db_username_password).includes(account_data);
  // console.log(exists)

  db_username_password.push(account_data)
  return db_username_password
}

class HelpingFunctions extends React.Component<any, any> {
  render() {
    return (
      <>
      </>
    );
  }
  saveAccount(account_data: any) {
    console.log(account_data)
  }
}

const functions_to_export = {
  saveAccount,
  checkExistance,
}

// export default saveAccount;
export default functions_to_export;