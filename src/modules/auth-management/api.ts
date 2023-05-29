import { config } from "@/api";
import axios from "axios";
import { PermissionApi, RolesApi, UserRolesApi, UsersApi } from "daoly-client-sdk";

export const userRolesApi = new UserRolesApi(config, undefined, axios)
export const userApi = new UsersApi(config, undefined, axios)
export const roleApi = new RolesApi(config, undefined, axios)
export const permissionApi = new PermissionApi(config, undefined, axios)
