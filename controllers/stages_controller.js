// dependencies
const stages = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { Stage } = db

//get all stages
stages.get('/', async (req, res) => {
  try {
      const foundStages = await Stage.findAll({
        order: [ [ 'stage_id', 'ASC' ] ],
        where: {
          name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
        },
        limit: 5,
        offset: 0
      })
      res.status(200).json(foundStages)
  } catch (error) {
      res.status(500).json(error)
  }
})

//get specific stage
stages.get('/:id', async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_id: req.params.id }
    })
    res.status(200).json(foundStage)
  } catch (error) {
    res.status(500).json(error)
  }
})

//create stage
stages.post('/', async (req, res) => {
  try {
      const newStage = await Stage.create(req.body)
      res.status(200).json({
          message: 'Successfully inserted a new stage',
          data: newStage
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

//update stage
stages.put('/:id', async (req, res) => {
  try {
      const updatedStages = await Stage.update(req.body, {
          where: {
              stage_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully updated ${updatedStages} stage(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

//delete a stage
stages.delete('/:id', async (req, res) => {
  try {
      const deletedStages = await Stage.destroy({
          where: {
              stage_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully deleted ${deletedStages} stage(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})


// export
module.exports = stages