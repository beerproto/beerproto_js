//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.3.1
// @generated from file beerproto/v1/srm.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum beerproto.v1.SRM
 */
export const SRM = proto3.makeEnum(
  "beerproto.v1.SRM",
  [
    {no: 0, name: "SRM_UNSPECIFIED"},
    {no: 1, name: "SRM_1"},
    {no: 2, name: "SRM_2"},
    {no: 3, name: "SRM_3"},
    {no: 4, name: "SRM_4"},
    {no: 5, name: "SRM_5"},
    {no: 6, name: "SRM_6"},
    {no: 7, name: "SRM_7"},
    {no: 8, name: "SRM_8"},
    {no: 9, name: "SRM_9"},
    {no: 10, name: "SRM_10"},
    {no: 11, name: "SRM_11"},
    {no: 12, name: "SRM_12"},
    {no: 13, name: "SRM_13"},
    {no: 14, name: "SRM_14"},
    {no: 15, name: "SRM_15"},
    {no: 16, name: "SRM_16"},
    {no: 17, name: "SRM_17"},
    {no: 18, name: "SRM_18"},
    {no: 19, name: "SRM_19"},
    {no: 20, name: "SRM_20"},
    {no: 21, name: "SRM_21"},
    {no: 22, name: "SRM_22"},
    {no: 23, name: "SRM_23"},
    {no: 24, name: "SRM_24"},
    {no: 25, name: "SRM_25"},
    {no: 26, name: "SRM_26"},
    {no: 27, name: "SRM_27"},
    {no: 28, name: "SRM_28"},
    {no: 29, name: "SRM_29"},
    {no: 30, name: "SRM_30"},
  ],
);

/**
 * @generated from message beerproto.v1.Color
 */
export const Color = proto3.makeMessageType(
  "beerproto.v1.Color",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "r", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "g", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "b", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

