import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Api } from "../../services/api"

const api=new Api();
api.setup();
/**
 * Model description here for TypeScript hints.
 */
export const SubcategoryDataModel = types
  .model("SubcategoryData")
  .props({
    // subCategoryData:types.array(types.frozen(),[]),
    // mediaData:types.optional(types.frozen(),[]),
    // subcategory:types.optional(types.frozen(),[]),
    subCategoryData: types.optional(types.array(types.frozen()), []),
    currentSubCategories: types.optional(types.frozen(), []),
    subCategoryMedia: types.optional(types.frozen(), []),
    visitedSubCategoryIds: types.optional(types.array(types.frozen()), [])
    
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({

    getSubCategoryData: flow(function* getSubCategoryData(parentId: number) {
      try {
        const res = yield api.getSubCategories(parentId);
        if (res.kind === "ok" && res.data.status == 200) {
          if (res.data.ok) {
            let indexOfCategory = findWithAttr(self.subCategoryData, parentId);
            res.data.data.data.forEach(element => {
              element.visited = false;
            });
            if (indexOfCategory == -1) {
              self.subCategoryData.push({ parentId: parentId, data: res.data.data.data });
              console.tron.log(self.subCategoryData);
            }
            else {
              self.subCategoryData[indexOfCategory] = { parentId: parentId, data: res.data.data.data };
              console.tron.log(self.subCategoryData);
            }
          }
        }
        else {
          return { response: false, message: "Something went wrong." };
        }
      } catch (error) {
        return { response: false, message: "Something went wrong." };
      }
      return { response: false, message: "Something went wrong." };
    }),


    getCurrentSubCategories(parentId: number) {
      let indexOfObject = findWithAttr(self.subCategoryData, parentId);
      self.currentSubCategories = self.subCategoryData[indexOfObject].data;
    },


    getSubCategoryMedia(subCategoryId: number) {
      const indexOfsubCategory = self.currentSubCategories.findIndex(x => x.id == subCategoryId);
      console.tron.log(self.currentSubCategories[indexOfsubCategory].type);
      if (self.currentSubCategories[indexOfsubCategory].type != 'None') {
        self.subCategoryMedia = self.currentSubCategories[indexOfsubCategory].media;
      }
      else {
        self.subCategoryMedia = [];
      }
      console.tron.log(self.subCategoryMedia);
    },


    setSubCategoryVisited(parentId: number, subCategoryId: number) {
      if (self.visitedSubCategoryIds.indexOf(subCategoryId) === -1) {
        self.visitedSubCategoryIds.push(subCategoryId);
      }
    },


    clearSubCategoryMedia() {
      self.subCategoryMedia = [];
    }








    // getSubcategoryData:flow(function* getSubcategoryData(parentId:number){

    //   try{
    //     const res = yield api.getSubCategories(parentId);
    //     if (res.kind === "ok" && res.data.status == 200) {
    //       if (res.data.ok) {
    //         self.subCategoryData = res.data.data.data;
    //         // console.log(self.subCategoryData)
    //       }
    //     }else {
    //       return { response: false, message: "Something went wrong." };
    //     }
    //   }
    //   catch (error) {
    //     return { response: false, message: "Something went wrong." };
    //   }
    //   return { response: false, message: "Something went wrong." };

    // }),

    // getSubcategory(parentId: number) {
    //   const SubCategories = (raw) => {
    //     return raw
    //   }
    //   try {
    //     let index = self.subCategoryData.findIndex(x => x.id == parentId);
    //     const rawData = self.subCategoryData[index].children;
    //     const subCategories = rawData.map(SubCategories)
    //     self.subcategory = subCategories;
    //   }
    //   catch {
    //     console.log('Error');
    //   }
    // },

    // getMediaData(categoryId: number) {
    //   const SubCategories = (raw) => {
    //     return raw
    //   }
    //   try {
    //     let index = self.subCategoryData.findIndex(x => x.id == categoryId);
    //     const rawData = self.subCategoryData[index].media;
    //     const subCategories = rawData.map(SubCategories)
    //     self.mediaData = subCategories;
    //   }
    //   catch {
    //     console.log('Error');
    //   }
    // }
    

  })) // eslint-disable-line @typescript-eslint/no-unused-vars

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */


 function findWithAttr(array, parentId) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].parentId == parentId) {
      return i;
    }
  }
  return -1;
} 

type SubcategoryDataType = Instance<typeof SubcategoryDataModel>
export interface SubcategoryData extends SubcategoryDataType {}
type SubcategoryDataSnapshotType = SnapshotOut<typeof SubcategoryDataModel>
export interface SubcategoryDataSnapshot extends SubcategoryDataSnapshotType {}
