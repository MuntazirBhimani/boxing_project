import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ApiDataModel } from "../api-data/api-data"
import { AuthModel } from "../auth/auth"
import { SubcategoryDataModel } from "../subcategory-data/subcategory-data"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
    apiData:types.optional(ApiDataModel,{}),
    subcategoryData:types.optional(SubcategoryDataModel,{}),
    auth:types.optional(AuthModel,{})
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
