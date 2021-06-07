const express = require('express');
const leadersRouter = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dishes = require('../models/dish');

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.get((req,res,next)=>{
    dishes.find({})
    .then((d)=>{
        res.setHeader('Content-Type','application/json');
        res.json(d);
    }).catch(err=>{
        next(err)
    })
})

.post((req,res,next)=>{
    console.log(dishes)
    dishes.create(req.body)
    .then((d)=>{
        console.log('Dish created',d)
        res.setHeader('Content-Type','application/json');
        res.json(d);
    }).catch(err=>{
        next(err)
    })
})

.put((req,res,next)=>{
    res.send('Put operation not supported on dish')
})

.delete((req,res,next)=>{
    dishes.remove({})
    .then((resp)=>{
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    }).catch(err=>{
        next(err)
    })
})

leadersRouter.route('/:leadersId')
.get((req,res,next)=>{
    dishes.findById(req.params.leadersId)
    .then((d)=>{
        res.setHeader('Content-Type','application/json');
        res.json(d);
    }).catch(err=>{
        next(err)
    })
})

.post((req,res,next)=>{
    res.send('Posh operation not supported on /dishes/'+req.params.leadersId)
})

.put((req,res,next)=>{
    dishes.findByIdAndUpdate(req.params.leadersId,{$set: req.body},{new:true})
    .then((d)=>{
        // console.log('Dish created',d)
        res.setHeader('Content-Type','application/json');
        res.json(d);
    }).catch(err=>{
        next(err)
    })
})

.delete((req,res,next)=>{
    dishes.findByIdAndRemove(req.params.leadersId)
    .then((resp)=>{
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    }).catch(err=>{
        next(err)
    })
})


module.exports = leadersRouter;
