import React from "react";
import S from "@sanity/desk-tool/structure-builder";
const hiddenDocTypes = listItem => !["config"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .id("global-config")
        .title("Configuration")
        .schemaType("config"),
      S.listItem()
        .title("Products by categories")
        .child(
          S.documentList()
            .title("Parent categories")
            .menuItems(S.documentTypeList("category").getMenuItems())
            .filter("_type == $type && !defined(parents)")
            .params({ type: "category" })
            .child(categoryId =>
              S.documentList()
                .title("Child categories")
                .menuItems(S.documentTypeList("category").getMenuItems())
                .filter("_type == $type && $categoryId in parents[]._ref")
                .params({ type: "category", categoryId })
                .child(categoryId =>
                  S.documentList()
                    .title("Products")
                    .menuItems(S.documentTypeList("product").getMenuItems())
                    .filter(
                      "_type == $type && $categoryId in categories[]._ref"
                    )
                    .params({ type: "product", categoryId })
                )
            )
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
