//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.3.1
// @generated from file beerproto/v1/water.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ConcentrationType, VolumeType } from "./measureable_units_pb.js";

/**
 * WaterBase provides unique properties to identify individual records of  brewing water
 *
 * @generated from message beerproto.v1.WaterBase
 */
export declare class WaterBase extends Message<WaterBase> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Calcium occurs naturally in most water sources and is the principle cause of hardness.
   *
   * @generated from field: beerproto.v1.ConcentrationType calcium = 2;
   */
  calcium?: ConcentrationType;

  /**
   * Nitrite occurs naturally at low levels in some waters but is removed by treatment. It is sometime produced as a by-product when chloramine is used as a disinfectant.
   *
   * @generated from field: beerproto.v1.ConcentrationType nitrite = 3;
   */
  nitrite?: ConcentrationType;

  /**
   * Occurs naturally in water sources and is derived through contact with rocks
   *
   * @generated from field: beerproto.v1.ConcentrationType chloride = 4;
   */
  chloride?: ConcentrationType;

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * @generated from field: beerproto.v1.ConcentrationType potassium = 6;
   */
  potassium?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType carbonate = 7;
   */
  carbonate?: ConcentrationType;

  /**
   * Iron occurs naturally in some water. High levels are treated to reduce the iron content. A number of water mains are made of iron. Brown discolouration complaints are associated with corroding iron mains. Iron is not harmful to health.
   *
   * @generated from field: beerproto.v1.ConcentrationType iron = 8;
   */
  iron?: ConcentrationType;

  /**
   * Fluoride salts typically have distinctive bitter tastes, and are odorless.
   *
   * @generated from field: beerproto.v1.ConcentrationType flouride = 9;
   */
  flouride?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType sulfate = 10;
   */
  sulfate?: ConcentrationType;

  /**
   * At levels of 10-30mg/l it is an important yeast nutrient, but above 30mg/l it can cause a sour/bitter taste to the beer.
   *
   * @generated from field: beerproto.v1.ConcentrationType magnesium = 11;
   */
  magnesium?: ConcentrationType;

  /**
   * @generated from field: string producer = 12;
   */
  producer: string;

  /**
   * @generated from field: beerproto.v1.ConcentrationType bicarbonate = 13;
   */
  bicarbonate?: ConcentrationType;

  /**
   * Nitrate occurs naturally in most source waters but concentrations can be increased as a result of fertiliser use. Where necessary concentrations in drinking water can be reduced by diluting with sources where nitrate levels are low or through specific treatment.
   *
   * @generated from field: beerproto.v1.ConcentrationType nitrate = 14;
   */
  nitrate?: ConcentrationType;

  /**
   * Sodium is naturally present in many water sources. Domestic water softeners can increase the sodium concentration.
   *
   * @generated from field: beerproto.v1.ConcentrationType sodium = 15;
   */
  sodium?: ConcentrationType;

  constructor(data?: PartialMessage<WaterBase>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.WaterBase";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WaterBase;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WaterBase;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WaterBase;

  static equals(a: WaterBase | PlainMessage<WaterBase> | undefined, b: WaterBase | PlainMessage<WaterBase> | undefined): boolean;
}

/**
 * WaterAdditionType collects the attributes of each water addition for use in a recipe
 *
 * @generated from message beerproto.v1.WaterAdditionType
 */
export declare class WaterAdditionType extends Message<WaterAdditionType> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: beerproto.v1.ConcentrationType flouride = 2;
   */
  flouride?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType sulfate = 3;
   */
  sulfate?: ConcentrationType;

  /**
   * @generated from field: string producer = 4;
   */
  producer: string;

  /**
   * @generated from field: beerproto.v1.ConcentrationType nitrate = 5;
   */
  nitrate?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType nitrite = 6;
   */
  nitrite?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType chloride = 7;
   */
  chloride?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.VolumeType amount = 8;
   */
  amount?: VolumeType;

  /**
   * @generated from field: string name = 89;
   */
  name: string;

  /**
   * @generated from field: beerproto.v1.ConcentrationType potassium = 10;
   */
  potassium?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType magnesium = 11;
   */
  magnesium?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType iron = 12;
   */
  iron?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType bicarbonate = 13;
   */
  bicarbonate?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType calcium = 14;
   */
  calcium?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType carbonate = 15;
   */
  carbonate?: ConcentrationType;

  /**
   * @generated from field: beerproto.v1.ConcentrationType sodium = 16;
   */
  sodium?: ConcentrationType;

  constructor(data?: PartialMessage<WaterAdditionType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "beerproto.v1.WaterAdditionType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WaterAdditionType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WaterAdditionType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WaterAdditionType;

  static equals(a: WaterAdditionType | PlainMessage<WaterAdditionType> | undefined, b: WaterAdditionType | PlainMessage<WaterAdditionType> | undefined): boolean;
}
