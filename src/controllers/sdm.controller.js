const {isEmpty} = require('lodash')
//model
const sdmModel = require('../models/sdm.model') 
module.exports = {
    createSdm: async (req, res) => {
        const { no_kta, fullname } = req.body
    
        const sdmData = {
          no_kta,
          fullname
        }
        const checkNoKta = await sdmModel.getAuthCondition({no_kta: no_kta})

        if(!isEmpty(checkNoKta)) {
            const data = {
                success: false,
                message: 'Nomor KTA is Exist',
              }
            return res.status(201).send(data)
         } 

        const results = await sdmModel.createSdm(sdmData)
        if (results) {
          const data = {
            success: true,
            message: 'Create sdm has ben success',
            data: sdmData
          }
          res.status(201).send(data)
        } else {
          const data = {
            success: false,
            message: 'Failed create sdm'
          }
          res.status(400).send(data)
        }
      },
}