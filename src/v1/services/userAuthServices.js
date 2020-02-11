/**
 * User authentication operations
 * 
 * @author Ben Philip
 */

'use strict';

const Models = require('../models');

/**
 * Get user token
 * @param {*} query 
 * @param {*} projection 
 * @param {*} options 
 * @param {*} callback 
 */
const getUserToken = (query, projection, options, callback) => {

    console.log(`Getting user token with query : ${JSON.stringify(query)}`);
    Models.userAuthModel.findOne(query, projection, options, callback);
}

/**
 * Remove auth tokens for given user
 * @param {*} query 
 * @param {*} callback 
 */
const deleteUserToken = (query, callback) => {

    console.log(`Removing tokens for user ${query.userId}`);
    Models.userAuthModel.deleteOne(query, callback);
}

/**
 * Set new user token
 * @param {*} userTokenMap 
 * @param {*} callback 
 */
const setUserToken = (userTokenMap, callback) => {
    
    let userTokenObj = new Models.userAuthModel(userTokenMap);
    userTokenObj.save(callback);
}

module.exports = {
    getUserToken: getUserToken,
    deleteUserToken: deleteUserToken,
    setUserToken: setUserToken
}