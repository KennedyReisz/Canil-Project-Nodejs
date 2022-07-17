import { Request, Response } from "express";
import { pet } from "../Models/pet";
import { createMenuObject } from "../Helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect("/");
    return;
  }

  let list = pet.getFromName(query);

  res.render("Pages/PageView", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
