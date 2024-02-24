import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Log the contents of req.body
        console.log("Request Body:", req.body);

        // Validate the request against the schema
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        // If validation passes, proceed to the next middleware
        return next();
    } catch (err: any) {
        // If validation fails, return a 400 Bad Request response with the error message
        const error_message = JSON.parse(err.message);
        return res.status(400).json({
            status: "Bad Request!",
            message: error_message[0].message,
        });
    }
};

export default validate;
