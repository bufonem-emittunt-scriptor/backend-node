// import GeneralUser from './../models/GeneralUser'
const GeneralUser = require("./../models/GeneralUser");

module.exports = async function findUser(_offset = 0, _limit = 15,
                                      _conditions, _orderBy = {creationDate: 1}){

        let offset = _offset || null;
        let limit = _limit || null;
        let conditions = _conditions || [];
        let orderBy = _orderBy || {};
        // console.log(conditions, 'conditions');

        //conds spread
        let conds = {};
        // console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        conditions.forEach((i, index)=> {
          console.log(i, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            let obj = {};

            if(i.type === 'like'){
                conds[i.field] = {};
                conds[i.field][`$regex`] = new RegExp(`${i.data}`, 'i');
            }
            else{
                conds[i.field] = {};
                conds[i.field][`$${i.type}`] = i.data;
            }
        });
        console.log(conds, 'ocnsds');
        let res = await GeneralUser.find(conds, null, {skip: offset, limit, sort: orderBy});
        console.log(res);
        return res;

    }