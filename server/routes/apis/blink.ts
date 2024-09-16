import express from "express";
import cors from 'cors';
import * as controller from "../../app/controllers/blink_controller";

const router = express.Router();

// Define CORS options
const corsOptions = {
    origin: '*', 
    methods: 'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization']
};

router.use(cors(corsOptions));


router.get('/:id', controller.getBlink);

router.post('/:id', controller.donate);




export default router