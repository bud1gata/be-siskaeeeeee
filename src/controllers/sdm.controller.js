const { isEmpty } = require('lodash')
//model
const sdmModel = require('../models/sdm.model')
module.exports = {

  getAllSdm: async (req, res) => {
    try {
      const sdmData = await sdmModel.getAllSdm()
      const data = {
        success: true,
        message: 'List SDM',
        data: sdmData
      }
      res.status(200).send(data)
    } catch (error) {
      const data = {
        success: false,
        message: error.message
      }
      res.status(400).send(data);
    }

  },

  deleteSdm: async (req, res) => {
    try {
      const { id } = req.params
      const _id = { id: parseInt(id) }

      const checkId = await sdmModel.getSdmConditionId({ id: _id })

      if (isEmpty(checkId)) throw new Error('Data sdm not found')

      const results = await sdmModel.deleteSdm({ id: _id })

      if (!results) throw new Error('Failed deleted sdm')

      if (results) {
        const data = {
          success: true,
          message: `SDM with id ${id} is deleted`
        }
        return res.status(200).send(data)
      }
    } catch (error) {
      const data = {
        success: false,
        message: error.message
      }
      res.status(400).send(data);
    }
  },

  updateSdm: async (req, res) => {
    try {
      const { id } = req.params
      const { fullname } = req.body

      const checkId = await sdmModel.getSdmConditionId({ id: parseInt(id) })

      if (isEmpty(checkId)) throw new Error('SDM not found')

      const sdmData = [
        { fullname: fullname },
        { id: parseInt(id) }
      ]
      const results = await sdmModel.updateSdm(sdmData)

      if (!results) throw new Error('Cannot update sdm')
      if (results) {
        const data = {
          success: true,
          message: 'SDM has been update',
          data: sdmData[0]
        }
        return res.status(201).send(data)
      }

    } catch (error) {
      const data = {
        success: false,
        message: error.message
      }
      res.status(400).send(data);
    }
  },

  createSdm: async (req, res) => {
    try {
      const { no_kta, fullname } = req.body

      const sdmData = {
        no_kta,
        fullname
      }
      const checkNoKta = await sdmModel.getAuthCondition({ no_kta: no_kta })

      // if kta exist
      if (!isEmpty(checkNoKta)) throw new Error('Nomor KTA is Exist')

      const results = await sdmModel.createSdm(sdmData)
      if (results) {
        const data = {
          success: true,
          message: 'Create sdm has ben success',
          data: sdmData
        }
        return res.status(201).send(data)
      }

      if (!results) throw new Error('Failed created sdm')

    } catch (error) {
      const data = {
        success: false,
        message: error.message
      }
      res.status(400).send(data)
    }

  },
}