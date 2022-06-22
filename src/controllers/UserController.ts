import { Request, Response } from "express";
import userService from "../services/UserServices";

class userController {
  async post(req: Request, res: Response) {
    try {
      await userService.postUser(req, res);
      return res.send({ status: "Data Inserted" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Server side error" });
    }
  }
  async get(req: Request, res: Response) {
    try {
      const users = await userService.getAllUser();
      if (!users) {
        return res.send({ status: "Something error" });
      }
      res.status(200).json({
        result: users,
        message: "success",
      });
    } catch (error) {
      return res.send({ status: "Something error" });
    }
  }

  async getByid(req: Request, res: Response) {
    try {
      const test = await userService.getById(req, res);
      if (test) {
        return res.send({ result: test });
      } else {
        return res.send({ result: "Not found" });
      }
    } catch (error) {
      console.log(error);
      return res.send({ status: "Something error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      await userService.updateUser(req, res);
      return res.send({ status: "Updated" });
    } catch (error) {
      console.log(error);
      return res.send({ status: "Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await userService.delete(req, res);
      return res.send({ status: "Deleted" });
    } catch (error) {
      return res.send({ status: "Error" });
    }
  }
}

export default new userController();
