import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
  res.send("searchs")
  //res.render("pages/search")
}
