'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    alunos() {
        return this.hasMany("App/Models/Aluno");
    }
}

module.exports = Curso
