/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/pages/user_management/get_users": {
    get: operations["GetUsers"];
  };
  "/pages/user_management/invite_user": {
    post: operations["InviteUser"];
  };
  "/pages/user_management/edit_user/{userId}": {
    patch: operations["EditUser"];
  };
  "/pages/user_management/delete_user/{userId}": {
    delete: operations["DeleteUser"];
  };
  "/pages/user_management/get_tree_sites": {
    get: operations["GetTreeSites"];
  };
  "/pages/user_management/get_user_sites/{userId}": {
    get: operations["GetUserSites"];
  };
  "/pages/user_management/change_user_sites": {
    post: operations["ChangeUserSites"];
  };
  "/pages/access_profiles/get_groups": {
    get: operations["GetGroups"];
  };
  "/pages/access_profiles/get_roles": {
    get: operations["GetRoles"];
  };
  "/pages/access_profiles/add_group": {
    post: operations["AddGroup"];
  };
  "/pages/access_profiles/edit_profile/{groupId}": {
    patch: operations["EditProfile"];
  };
  "/pages/access_profiles/delete_group/{groupId}": {
    delete: operations["DeleteGroup"];
  };
  "/pages/access_profiles/get_group_roles/{groupId}": {
    get: operations["GetGroupRoles"];
  };
  "/pages/access_profiles/change_group_roles/{groupId}": {
    post: operations["ChangeGroupRoles"];
  };
  "/features/profiles/get_profiles": {
    get: operations["GetProfiles"];
  };
  "/sites": {
    get: operations["GetSites"];
  };
  "/assets/{assetId}/properties": {
    get: operations["GetAssetProperties"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    TInviteUserBody: {
      group_id: string;
      email: string;
    };
    TMicrosoftEditUser: {
      phone: string | null;
      mail: string | null;
      lastName: string;
      firstName: string;
    };
    TEditUserBody: {
      groupId: string;
    } & components["schemas"]["TMicrosoftEditUser"];
    TChangeUserSitesBody: {
      siteIds: number[];
      userId: string;
    };
    TAddGroupBody: {
      mailNickname: string;
      description: string;
      name: string;
    };
    TEditGroupBody: {
      description: string;
      name: string;
    };
    TChangeGroupRolesBody: {
      roleIds: string[];
    };
    SiteGetAll: {
      data: ({
          country: {
            name: string;
          };
          postalCode: string | null;
          customerName: string | null;
          contactName: string | null;
          coordinates: {
            longitude: string;
            latitude: string;
          } | null;
          address: string | null;
          image_url: string;

          name: string;
          /** Format: double */
          id: number;
        })[];
    };
    AssetGetProperties: {
      assetProperties: ({
          property: {
            name: string;
            /** Format: double */
            id: number;
          };
          /** Format: double */
          value: number | null;
        })[];
      /** Format: double */
      relativeId: number | null;
      name: string | null;
    };
  };
  responses: {
  };
  parameters: {
  };
  requestBodies: {
  };
  headers: {
  };
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  GetUsers: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            data: ({
                group: {
                  name?: string;
                  id?: string;
                };
                phone: string | null;
                email: string | null;
                lastName: string | null;
                firstName: string | null;
                id: string;
              })[];
          };
        };
      };
    };
  };
  InviteUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TInviteUserBody"];
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  EditUser: {
    parameters: {
      path: {
        userId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["TEditUserBody"];
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  DeleteUser: {
    parameters: {
      path: {
        userId: string;
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  GetTreeSites: {
    parameters: {
      query?: {
        siteName?: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            data: ({
                subregionName: string | null;
                regionName: string;
                countryName: string;
                postalCode: string | null;
                siteName: string;
                /** Format: double */
                siteId: number;
              })[];
          };
        };
      };
    };
  };
  GetUserSites: {
    parameters: {
      path: {
        userId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            siteIds: number[];
          };
        };
      };
    };
  };
  ChangeUserSites: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TChangeUserSitesBody"];
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  GetGroups: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            data: ({
                description: string | null;
                name: string;
                id: string;
              })[];
          };
        };
      };
    };
  };
  GetRoles: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            data: {
                name: string;
                value: string;
                id: string;
              }[];
          };
        };
      };
    };
  };
  AddGroup: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TAddGroupBody"];
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            id: string;
          };
        };
      };
    };
  };
  EditProfile: {
    parameters: {
      path: {
        groupId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["TEditGroupBody"];
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  DeleteGroup: {
    parameters: {
      path: {
        groupId: string;
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  GetGroupRoles: {
    parameters: {
      path: {
        groupId: string;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            data: {
                name: string;
                value: string;
                id: string;
              }[];
          };
        };
      };
    };
  };
  ChangeGroupRoles: {
    parameters: {
      path: {
        groupId: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["TChangeGroupRolesBody"];
      };
    };
    responses: {
      /** @description No content */
      204: {
        content: never;
      };
    };
  };
  GetProfiles: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": {
            data: {
                name: string;
                id: string;
              }[];
          };
        };
      };
    };
  };
  GetSites: {
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["SiteGetAll"];
        };
      };
    };
  };
  GetAssetProperties: {
    parameters: {
      path: {
        assetId: number;
      };
    };
    responses: {
      /** @description Ok */
      200: {
        content: {
          "application/json": components["schemas"]["AssetGetProperties"];
        };
      };
    };
  };
}
