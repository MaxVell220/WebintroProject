/* tslint:disable */
/* eslint-disable */
/**
 * VH Candidates service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CandidateType
 */
export interface CandidateType {
    /**
     * 
     * @type {string}
     * @memberof CandidateType
     */
    candidateType: string;
}

export function CandidateTypeFromJSON(json: any): CandidateType {
    return CandidateTypeFromJSONTyped(json, false);
}

export function CandidateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CandidateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'candidateType': json['candidateType'],
    };
}

export function CandidateTypeToJSON(value?: CandidateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'candidateType': value.candidateType,
    };
}

