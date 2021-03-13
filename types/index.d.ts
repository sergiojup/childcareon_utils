// Type definitions for Childcare On Server Library
export enum GENDER {
  MALE = 'male',
  FEMALE = 'female'
}
  
export interface IChild {
  [x: string]: any;
  allClassrooms?: any;
  birthdate: string;
  birthdateParsed?: string;
  classroomName: string;
  classroomId: string;
  code?: any;
  gender: GENDER;
  name: string;
  parents?: any;
  school: string;
  surname: string;
}

/**
 * @param  {{notificationColor:string}} params
 * @returns void
 */
export function init(params: { notificationColor: string }): void;
/**
 * @param  {string} num
 * @returns string
 */
export function addLeadingZeros(num: string): string;
/**
 * @param  {string} title
 * @param  {string} body
 * @param  {string} tag?
 * @param  {any} extra?
 * @returns any
 */
export function setNotification(title: string, body: string, tag?: string, extra?: any): any;
