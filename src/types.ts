/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Vehicle {
  id: string;
  factory: string;
  family: string;
  model: string;
  display_name: string;
  display_name_ru?: string;
  years: {
    start: number;
    end: number | null;
  };
  body_type: string;
  body_type_ru?: string;
  class: string;
  class_ru?: string;
  engine: string[];
  power_hp: number[];
  description: string;
  description_ru?: string;
  extended_description?: string;
  extended_description_ru?: string;
  facts: string[];
  facts_ru?: string[];
  tags: string[];
  tags_ru?: string[];
  images: string[];
}

export interface Factory {
  id: string;
  name: string;
  name_ru?: string;
  description: string;
  description_ru?: string;
  city: string;
  city_ru?: string;
  years: {
    start: number;
    end: number | null;
  };
  logo?: string;
}
