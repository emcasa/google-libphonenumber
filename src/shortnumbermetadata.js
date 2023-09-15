/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generated metadata for file
 * ../resources/ShortNumberMetadata.xml
 * @author Nikolaos Trogkanis
 */

goog.provide('i18n.phonenumbers.shortnumbermetadata');

/**
 * A mapping from a country calling code to the region codes which denote the
 * region represented by that country calling code. In the case of multiple
 * countries sharing a calling code, such as the NANPA regions, the one
 * indicated with "isMainCountryForCode" in the metadata should be first.
 * @type {!Object.<number, Array.<string>>}
 */
i18n.phonenumbers.shortnumbermetadata.countryCodeToRegionCodeMap = {
  0:["BR"]
};

/**
 * A mapping from a region code to the PhoneMetadata for that region.
 * @type {!Object.<string, Array>}
 */
i18n.phonenumbers.shortnumbermetadata.countryToMetadata = {
  "BR": [
    null,
    [
        null,
        null,
        "[1-69]\\d{2,5}",
        null,
        null,
        null,
        null,
        null,
        null,
        [
            3,
            4,
            5,
            6
        ]
    ],
    null,
    null,
    [
        null,
        null,
        "1(?:00|12|28|8[015]|9[0-47-9])|4(?:57|82\\d)|911",
        null,
        null,
        null,
        "100",
        null,
        null,
        [
            3,
            4
        ]
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        [
            -1
        ]
    ],
    null,
    null,
    null,
    "BR",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    [
        null,
        null,
        "1(?:12|28|9[023])|911",
        null,
        null,
        null,
        "112",
        null,
        null,
        [
            3
        ]
    ],
    null,
    [
        null,
        null,
        "1(?:0(?:[02]|3(?:1[2-579]|2[13-9]|3[124-9]|4[1-3578]|5[1-468]|6[139]|8[149]|9[168])|5[0-35-9]|6(?:0|1[0-35-8]?|2[0145]|3[0137]?|4[37-9]?|5[0-35]|6[016]?|7[137]?|8[5-8]|9[1359]))|1[25-8]|2[357-9]|3[024-68]|4[12568]|5\\d|6[0-8]|8[015]|9[0-47-9])|2(?:7(?:330|878)|85959?)|(?:32|91)1|4(?:0404?|57|828)|55555|6(?:0\\d{4}|10000)|(?:133|411)[12]",
        null,
        null,
        null,
        "100"
    ],
    [
        null,
        null,
        "102|273\\d\\d|321",
        null,
        null,
        null,
        "102",
        null,
        null,
        [
            3,
            5
        ]
    ],
    [
        null,
        null,
        "151|(?:278|555)\\d\\d|4(?:04\\d\\d?|11\\d|57)",
        null,
        null,
        null,
        "151",
        null,
        null,
        [
            3,
            4,
            5
        ]
    ],
    null,
    [
        null,
        null,
        "285\\d{2,3}|321|40404|(?:27[38]\\d|482)\\d|6(?:0\\d|10)\\d{3}",
        null,
        null,
        null,
        "321"
    ]
  ]
}

