'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  school () {
    return this.belongsTo('App/Models/School')
  }
}

module.exports = Student
