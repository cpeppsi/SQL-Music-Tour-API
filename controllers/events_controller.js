// dependencies
const events = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { Event, Meet_Greet, Band, Set_Time, Stage } = db

//get all events
events.get('/', async (req, res) => {
  try {
      const foundEvents = await Event.findAll({
        order: [ [ 'date', 'ASC' ] ],
        where: {
          name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
        },
        limit: 5,
        offset: 0
      })
      res.status(200).json(foundEvents)
  } catch (error) {
      res.status(500).json(error)
  }
})

//get specific event
events.get('/:name', async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { name: req.params.name },
      include: [
        {
          model: Meet_Greet,
          as: "meet_greets",
          include: { 
            model: Band, 
            as: "band",
          },
        },
        {
          model: Set_Time,
          as: "set_times",
          include: { 
            model: Band, 
            as: "band"
           },
        },
        {
          model: Stage,
          as: "stages"
        },
      ],
    })
    res.status(200).json(foundEvent)
  } catch (error) {
    res.status(500).json(error)
  }
})

//create event
events.post('/', async (req, res) => {
  try {
      const newEvent = await Event.create(req.body)
      res.status(200).json({
          message: 'Successfully inserted a new event',
          data: newEvent
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

//update event
events.put('/:id', async (req, res) => {
  try {
      const updatedEvents = await Event.update(req.body, {
          where: {
              event_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully updated ${updatedEvents} event(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})

//delete event
events.delete('/:id', async (req, res) => {
  try {
      const deletedEvents = await Event.destroy({
          where: {
              event_id: req.params.id
          }
      })
      res.status(200).json({
          message: `Successfully deleted ${deletedEvents} band(s)`
      })
  } catch(err) {
      res.status(500).json(err)
  }
})


// export
module.exports = events