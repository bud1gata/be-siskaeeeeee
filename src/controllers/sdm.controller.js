const {isEmpty} = require('lodash')
//model
const sdmModel = require('../models/sdm.model') 
module.exports = {

  getAllSdm: async (req, res) => {
    const sdmData = await sdmModel.getAllSdm()
    const data = {
      success: true,
      message: 'List SDM',
      data: sdmData
      }
    res.status(200).send(data)
  },

  deleteSdm: async (req, res) => {
    const { id } = req.params
    const _id = { id: parseInt(id) }
    const checkId = await sdmModel.getSdmConditionId({id: _id})
    if (checkId.length > 0) {
      const results = await sdmModel.deleteSdm({id: _id})
      if (results) {
        const data = {
          success: true,
          message: `Author with id ${id} is deleted`
        }
        res.status(200).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed delete author'
        }
        res.status(400).send(data)
      }
    } else {
      const data = {
        success: false,
        message: 'No author for delete'
      }
      res.status(400).send(data)
    }
  },

  updateSdm: async (req, res) => {
    const { id } = req.params
    const { fullname } = req.body

    const checkId = await sdmModel.getSdmConditionId({ id: parseInt(id) })
    if (checkId.length > 0) {
      const sdmData = [
        { fullname: fullname},
        { id: parseInt(id) }
      ]
      const results = await sdmModel.updateSdm(sdmData)
      if (results) {
        const data = {
          success: true,
          message: 'Author has been update',
          data: sdmData[0]
        }
        res.status(201).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed update author'
        }
        res.status(400).send(data)
      }
    } else {
      const data = {
        success: false,
        message: `Author with id ${id} not found`
      }
      res.status(400).send(data)
    }
  },

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