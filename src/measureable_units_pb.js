//*
// BeerProto
//
// Another beer format, written in protocol buffer.
//
// Copyright (c) 2020 Ross Merrigan

// @generated by protoc-gen-es v1.3.1
// @generated from file beerproto/v1/measureable_units.proto (package beerproto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { BinaryArithmetic, ExpressionTree } from "./expression_pb.js";

/**
 * @generated from enum beerproto.v1.VolumeUnit
 */
export const VolumeUnit = proto3.makeEnum(
  "beerproto.v1.VolumeUnit",
  [
    {no: 0, name: "VOLUME_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "VOLUME_UNIT_ML", localName: "ML"},
    {no: 2, name: "VOLUME_UNIT_L", localName: "L"},
    {no: 3, name: "VOLUME_UNIT_TSP", localName: "TSP"},
    {no: 4, name: "VOLUME_UNIT_TBSP", localName: "TBSP"},
    {no: 5, name: "VOLUME_UNIT_FLOZ", localName: "FLOZ"},
    {no: 6, name: "VOLUME_UNIT_CUP", localName: "CUP"},
    {no: 7, name: "VOLUME_UNIT_PT", localName: "PT"},
    {no: 8, name: "VOLUME_UNIT_QT", localName: "QT"},
    {no: 9, name: "VOLUME_UNIT_GAL", localName: "GAL"},
    {no: 10, name: "VOLUME_UNIT_BBL", localName: "BBL"},
    {no: 11, name: "VOLUME_UNIT_IFLOZ", localName: "IFLOZ"},
    {no: 12, name: "VOLUME_UNIT_IPT", localName: "IPT"},
    {no: 13, name: "VOLUME_UNIT_IQT", localName: "IQT"},
    {no: 14, name: "VOLUME_UNIT_IGAL", localName: "IGAL"},
    {no: 15, name: "VOLUME_UNIT_IBBL", localName: "IBBL"},
  ],
);

/**
 * @generated from enum beerproto.v1.MassUnit
 */
export const MassUnit = proto3.makeEnum(
  "beerproto.v1.MassUnit",
  [
    {no: 0, name: "MASS_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MASS_UNIT_MG", localName: "MG"},
    {no: 2, name: "MASS_UNIT_G", localName: "G"},
    {no: 3, name: "MASS_UNIT_KG", localName: "KG"},
    {no: 4, name: "MASS_UNIT_LB", localName: "LB"},
    {no: 5, name: "MASS_UNIT_OZ", localName: "OZ"},
  ],
);

/**
 * @generated from enum beerproto.v1.DiastaticPowerUnit
 */
export const DiastaticPowerUnit = proto3.makeEnum(
  "beerproto.v1.DiastaticPowerUnit",
  [
    {no: 0, name: "DIASTATIC_POWER_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "DIASTATIC_POWER_UNIT_LINTNER", localName: "LINTNER"},
    {no: 2, name: "DIASTATIC_POWER_UNIT_WK", localName: "WK"},
  ],
);

/**
 * @generated from enum beerproto.v1.TemperatureUnit
 */
export const TemperatureUnit = proto3.makeEnum(
  "beerproto.v1.TemperatureUnit",
  [
    {no: 0, name: "TEMPERATURE_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "TEMPERATURE_UNIT_C", localName: "C"},
    {no: 2, name: "TEMPERATURE_UNIT_F", localName: "F"},
  ],
);

/**
 * @generated from enum beerproto.v1.AcidityUnit
 */
export const AcidityUnit = proto3.makeEnum(
  "beerproto.v1.AcidityUnit",
  [
    {no: 0, name: "ACIDITY_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ACIDITY_UNIT_PH", localName: "PH"},
  ],
);

/**
 * @generated from enum beerproto.v1.TimeUnit
 */
export const TimeUnit = proto3.makeEnum(
  "beerproto.v1.TimeUnit",
  [
    {no: 0, name: "TIME_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "TIME_UNIT_SEC", localName: "SEC"},
    {no: 2, name: "TIME_UNIT_MIN", localName: "MIN"},
    {no: 3, name: "TIME_UNIT_HR", localName: "HR"},
    {no: 4, name: "TIME_UNIT_DAY", localName: "DAY"},
    {no: 5, name: "TIME_UNIT_WEEK", localName: "WEEK"},
  ],
);

/**
 * @generated from enum beerproto.v1.ColorUnit
 */
export const ColorUnit = proto3.makeEnum(
  "beerproto.v1.ColorUnit",
  [
    {no: 0, name: "COLOR_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "COLOR_UNIT_EBC", localName: "EBC"},
    {no: 2, name: "COLOR_UNIT_LOVI", localName: "LOVI"},
    {no: 3, name: "COLOR_UNIT_SRM", localName: "SRM"},
  ],
);

/**
 * @generated from enum beerproto.v1.CarbonationUnit
 */
export const CarbonationUnit = proto3.makeEnum(
  "beerproto.v1.CarbonationUnit",
  [
    {no: 0, name: "CARBONATION_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CARBONATION_UNIT_VOLS", localName: "VOLS"},
    {no: 2, name: "CARBONATION_UNIT_GL", localName: "GL"},
  ],
);

/**
 * @generated from enum beerproto.v1.BitternessUnit
 */
export const BitternessUnit = proto3.makeEnum(
  "beerproto.v1.BitternessUnit",
  [
    {no: 0, name: "BITTERNESS_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "BITTERNESS_UNIT_IBUS", localName: "IBUS"},
  ],
);

/**
 * @generated from enum beerproto.v1.GravityUnit
 */
export const GravityUnit = proto3.makeEnum(
  "beerproto.v1.GravityUnit",
  [
    {no: 0, name: "GRAVITY_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "GRAVITY_UNIT_SG", localName: "SG"},
    {no: 2, name: "GRAVITY_UNIT_PLATO", localName: "PLATO"},
    {no: 3, name: "GRAVITY_UNIT_BRIX", localName: "BRIX"},
  ],
);

/**
 * @generated from enum beerproto.v1.SpecificHeatUnit
 */
export const SpecificHeatUnit = proto3.makeEnum(
  "beerproto.v1.SpecificHeatUnit",
  [
    {no: 0, name: "SPECIFIC_HEAT_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SPECIFIC_HEAT_UNIT_CALGC", localName: "CALGC"},
    {no: 2, name: "SPECIFIC_HEAT_UNIT_JKGK", localName: "JKGK"},
    {no: 3, name: "SPECIFIC_HEAT_UNIT_BTULBF", localName: "BTULBF"},
  ],
);

/**
 * @generated from enum beerproto.v1.ConcentrationUnit
 */
export const ConcentrationUnit = proto3.makeEnum(
  "beerproto.v1.ConcentrationUnit",
  [
    {no: 0, name: "CONCENTRATION_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CONCENTRATION_UNIT_PPM", localName: "PPM"},
    {no: 2, name: "CONCENTRATION_UNIT_PPB", localName: "PPB"},
    {no: 3, name: "CONCENTRATION_UNIT_MGL", localName: "MGL"},
    {no: 4, name: "CONCENTRATION_UNIT_MG100L", localName: "MG100L"},
  ],
);

/**
 * @generated from enum beerproto.v1.SpecificVolumeUnit
 */
export const SpecificVolumeUnit = proto3.makeEnum(
  "beerproto.v1.SpecificVolumeUnit",
  [
    {no: 0, name: "SPECIFIC_VOLUME_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SPECIFIC_VOLUME_UNIT_QTLB", localName: "QTLB"},
    {no: 2, name: "SPECIFIC_VOLUME_UNIT_GALLB", localName: "GALLB"},
    {no: 3, name: "SPECIFIC_VOLUME_UNIT_GALOZ", localName: "GALOZ"},
    {no: 4, name: "SPECIFIC_VOLUME_UNIT_LG", localName: "LG"},
    {no: 5, name: "SPECIFIC_VOLUME_UNIT_LKG", localName: "LKG"},
    {no: 6, name: "SPECIFIC_VOLUME_UNIT_FLOZOZ", localName: "FLOZOZ"},
    {no: 7, name: "SPECIFIC_VOLUME_UNIT_M3KG", localName: "M3KG"},
    {no: 8, name: "SPECIFIC_VOLUME_UNIT_FT3LB", localName: "FT3LB"},
  ],
);

/**
 * @generated from enum beerproto.v1.UnitUnit
 */
export const UnitUnit = proto3.makeEnum(
  "beerproto.v1.UnitUnit",
  [
    {no: 0, name: "UNIT_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "UNIT_UNIT_ONE", localName: "ONE"},
    {no: 2, name: "UNIT_UNIT_UNIT", localName: "UNIT"},
    {no: 3, name: "UNIT_UNIT_EACH", localName: "EACH"},
    {no: 4, name: "UNIT_UNIT_DIMENSIONLESS", localName: "DIMENSIONLESS"},
    {no: 5, name: "UNIT_UNIT_PKG", localName: "PKG"},
  ],
);

/**
 * @generated from enum beerproto.v1.PercentUnit
 */
export const PercentUnit = proto3.makeEnum(
  "beerproto.v1.PercentUnit",
  [
    {no: 0, name: "PERCENT_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "PERCENT_UNIT_PERCENT_SIGN", localName: "PERCENT_SIGN"},
  ],
);

/**
 * @generated from enum beerproto.v1.ViscosityUnit
 */
export const ViscosityUnit = proto3.makeEnum(
  "beerproto.v1.ViscosityUnit",
  [
    {no: 0, name: "VISCOSITY_UNIT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "VISCOSITY_UNIT_CP", localName: "CP"},
    {no: 2, name: "VISCOSITY_UNIT_MPAS", localName: "MPAS"},
  ],
);

/**
 * @generated from message beerproto.v1.ConversionVolumeUnit
 */
export const ConversionVolumeUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionVolumeUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionVolumeUnit_ConversionVolumeUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionVolumeUnit.ConversionVolumeUnitRate
 */
export const ConversionVolumeUnit_ConversionVolumeUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionVolumeUnit.ConversionVolumeUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(VolumeUnit) },
    { no: 2, name: "operator", kind: "enum", T: proto3.getEnumType(BinaryArithmetic) },
    { no: 3, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
  {localName: "ConversionVolumeUnit_ConversionVolumeUnitRate"},
);

/**
 * @generated from message beerproto.v1.VolumeType
 */
export const VolumeType = proto3.makeMessageType(
  "beerproto.v1.VolumeType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(VolumeUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.MassType
 */
export const MassType = proto3.makeMessageType(
  "beerproto.v1.MassType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(MassUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionMassUnit
 */
export const ConversionMassUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionMassUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionMassUnit_ConversionMassUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionMassUnit.ConversionMassUnitRate
 */
export const ConversionMassUnit_ConversionMassUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionMassUnit.ConversionMassUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(MassUnit) },
    { no: 2, name: "operator", kind: "enum", T: proto3.getEnumType(BinaryArithmetic) },
    { no: 3, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
  {localName: "ConversionMassUnit_ConversionMassUnitRate"},
);

/**
 * Diastatic power is a measurement of malted grains enzymatic content. A value of 35 Lintner is needed to self convert, while a value of 100 or more is desirable for base malts
 *
 * @generated from message beerproto.v1.DiastaticPowerType
 */
export const DiastaticPowerType = proto3.makeMessageType(
  "beerproto.v1.DiastaticPowerType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(DiastaticPowerUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionDiastaticPowerUnit
 */
export const ConversionDiastaticPowerUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionDiastaticPowerUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionDiastaticPowerUnit_ConversionDiastaticPowerUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionDiastaticPowerUnit.ConversionDiastaticPowerUnitRate
 */
export const ConversionDiastaticPowerUnit_ConversionDiastaticPowerUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionDiastaticPowerUnit.ConversionDiastaticPowerUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(DiastaticPowerUnit) },
    { no: 2, name: "tree", kind: "message", T: ExpressionTree },
  ],
  {localName: "ConversionDiastaticPowerUnit_ConversionDiastaticPowerUnitRate"},
);

/**
 * @generated from message beerproto.v1.TemperatureType
 */
export const TemperatureType = proto3.makeMessageType(
  "beerproto.v1.TemperatureType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(TemperatureUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionTemperatureUnit
 */
export const ConversionTemperatureUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionTemperatureUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionTemperatureUnit_ConversionTemperatureUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionTemperatureUnit.ConversionTemperatureUnitRate
 */
export const ConversionTemperatureUnit_ConversionTemperatureUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionTemperatureUnit.ConversionTemperatureUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(TemperatureUnit) },
    { no: 2, name: "tree", kind: "message", T: ExpressionTree },
  ],
  {localName: "ConversionTemperatureUnit_ConversionTemperatureUnitRate"},
);

/**
 * @generated from message beerproto.v1.AcidityType
 */
export const AcidityType = proto3.makeMessageType(
  "beerproto.v1.AcidityType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(AcidityUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.TimeType
 */
export const TimeType = proto3.makeMessageType(
  "beerproto.v1.TimeType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(TimeUnit) },
  ],
);

/**
 * ColorType supports both grain color properties, such as Lovibond, and wort color properties such as SRM and EBC
 *
 * @generated from message beerproto.v1.ColorType
 */
export const ColorType = proto3.makeMessageType(
  "beerproto.v1.ColorType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(ColorUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionColorUnit
 */
export const ConversionColorUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionColorUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionColorUnit_ConversionColorUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionColorUnit.ConversionColorUnitRate
 */
export const ConversionColorUnit_ConversionColorUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionColorUnit.ConversionColorUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(ColorUnit) },
    { no: 2, name: "tree", kind: "message", T: ExpressionTree },
  ],
  {localName: "ConversionColorUnit_ConversionColorUnitRate"},
);

/**
 * @generated from message beerproto.v1.CarbonationType
 */
export const CarbonationType = proto3.makeMessageType(
  "beerproto.v1.CarbonationType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(CarbonationUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.BitternessType
 */
export const BitternessType = proto3.makeMessageType(
  "beerproto.v1.BitternessType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(BitternessUnit) },
  ],
);

/**
 * Gravity refers to the both the measurements of percent of sugar content, ie plato and brix, as well as relative density ie specific gravity
 *
 * @generated from message beerproto.v1.GravityType
 */
export const GravityType = proto3.makeMessageType(
  "beerproto.v1.GravityType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(GravityUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionGravityUnit
 */
export const ConversionGravityUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionGravityUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionGravityUnit_ConversionGravityUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionGravityUnit.ConversionGravityUnitRate
 */
export const ConversionGravityUnit_ConversionGravityUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionGravityUnit.ConversionGravityUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(GravityUnit) },
    { no: 2, name: "tree", kind: "message", T: ExpressionTree },
  ],
  {localName: "ConversionGravityUnit_ConversionGravityUnitRate"},
);

/**
 * @generated from message beerproto.v1.SpecificHeatType
 */
export const SpecificHeatType = proto3.makeMessageType(
  "beerproto.v1.SpecificHeatType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(SpecificHeatUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConcentrationType
 */
export const ConcentrationType = proto3.makeMessageType(
  "beerproto.v1.ConcentrationType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(ConcentrationUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionSpecificVolumeUnit
 */
export const ConversionSpecificVolumeUnit = proto3.makeMessageType(
  "beerproto.v1.ConversionSpecificVolumeUnit",
  () => [
    { no: 1, name: "rates", kind: "message", T: ConversionSpecificVolumeUnit_ConversionSpecificVolumeUnitRate, repeated: true },
  ],
);

/**
 * @generated from message beerproto.v1.ConversionSpecificVolumeUnit.ConversionSpecificVolumeUnitRate
 */
export const ConversionSpecificVolumeUnit_ConversionSpecificVolumeUnitRate = proto3.makeMessageType(
  "beerproto.v1.ConversionSpecificVolumeUnit.ConversionSpecificVolumeUnitRate",
  () => [
    { no: 1, name: "target", kind: "enum", T: proto3.getEnumType(VolumeUnit) },
    { no: 2, name: "operator", kind: "enum", T: proto3.getEnumType(BinaryArithmetic) },
    { no: 3, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
  {localName: "ConversionSpecificVolumeUnit_ConversionSpecificVolumeUnitRate"},
);

/**
 * @generated from message beerproto.v1.SpecificVolumeType
 */
export const SpecificVolumeType = proto3.makeMessageType(
  "beerproto.v1.SpecificVolumeType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(SpecificVolumeUnit) },
  ],
);

/**
 * UnitType is used where unitless amounts are required, such as 1 apple, or 1 yeast packet
 *
 * @generated from message beerproto.v1.UnitType
 */
export const UnitType = proto3.makeMessageType(
  "beerproto.v1.UnitType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(UnitUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.PercentType
 */
export const PercentType = proto3.makeMessageType(
  "beerproto.v1.PercentType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(PercentUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.ViscosityType
 */
export const ViscosityType = proto3.makeMessageType(
  "beerproto.v1.ViscosityType",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "unit", kind: "enum", T: proto3.getEnumType(ViscosityUnit) },
  ],
);

/**
 * @generated from message beerproto.v1.CarbonationRangeType
 */
export const CarbonationRangeType = proto3.makeMessageType(
  "beerproto.v1.CarbonationRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: CarbonationType },
    { no: 2, name: "maximum", kind: "message", T: CarbonationType },
  ],
);

/**
 * @generated from message beerproto.v1.BitternessRangeType
 */
export const BitternessRangeType = proto3.makeMessageType(
  "beerproto.v1.BitternessRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: BitternessType },
    { no: 2, name: "maximum", kind: "message", T: BitternessType },
  ],
);

/**
 * @generated from message beerproto.v1.TemperatureRangeType
 */
export const TemperatureRangeType = proto3.makeMessageType(
  "beerproto.v1.TemperatureRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: TemperatureType },
    { no: 2, name: "maximum", kind: "message", T: TemperatureType },
  ],
);

/**
 * @generated from message beerproto.v1.ColorRangeType
 */
export const ColorRangeType = proto3.makeMessageType(
  "beerproto.v1.ColorRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: ColorType },
    { no: 2, name: "maximum", kind: "message", T: ColorType },
  ],
);

/**
 * @generated from message beerproto.v1.GravityRangeType
 */
export const GravityRangeType = proto3.makeMessageType(
  "beerproto.v1.GravityRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: GravityType },
    { no: 2, name: "maximum", kind: "message", T: GravityType },
  ],
);

/**
 * @generated from message beerproto.v1.PercentRangeType
 */
export const PercentRangeType = proto3.makeMessageType(
  "beerproto.v1.PercentRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: PercentType },
    { no: 2, name: "maximum", kind: "message", T: PercentType },
  ],
);

/**
 * @generated from message beerproto.v1.TimeRangeType
 */
export const TimeRangeType = proto3.makeMessageType(
  "beerproto.v1.TimeRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: TimeType },
    { no: 2, name: "maximum", kind: "message", T: TimeType },
  ],
);

/**
 * @generated from message beerproto.v1.ViscosityRangeType
 */
export const ViscosityRangeType = proto3.makeMessageType(
  "beerproto.v1.ViscosityRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: ViscosityType },
    { no: 2, name: "maximum", kind: "message", T: ViscosityType },
  ],
);

/**
 * @generated from message beerproto.v1.DiastaticPowerRangeType
 */
export const DiastaticPowerRangeType = proto3.makeMessageType(
  "beerproto.v1.DiastaticPowerRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: DiastaticPowerType },
    { no: 2, name: "maximum", kind: "message", T: DiastaticPowerType },
  ],
);

/**
 * @generated from message beerproto.v1.SpecificVolumeRangeType
 */
export const SpecificVolumeRangeType = proto3.makeMessageType(
  "beerproto.v1.SpecificVolumeRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: SpecificVolumeType },
    { no: 2, name: "maximum", kind: "message", T: SpecificVolumeType },
  ],
);

/**
 * @generated from message beerproto.v1.AcidityRangeType
 */
export const AcidityRangeType = proto3.makeMessageType(
  "beerproto.v1.AcidityRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: AcidityType },
    { no: 2, name: "maximum", kind: "message", T: AcidityType },
  ],
);

/**
 * @generated from message beerproto.v1.ConcentrationRangeType
 */
export const ConcentrationRangeType = proto3.makeMessageType(
  "beerproto.v1.ConcentrationRangeType",
  () => [
    { no: 1, name: "minimum", kind: "message", T: ConcentrationType },
    { no: 2, name: "maximum", kind: "message", T: ConcentrationType },
  ],
);

