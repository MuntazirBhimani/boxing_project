import { SubcategoryDataModel, SubcategoryData } from "./subcategory-data"

test("can be created", () => {
  const instance: SubcategoryData = SubcategoryDataModel.create({})

  expect(instance).toBeTruthy()
})