import { College, Role, User } from './types';

export const COLLEGE_NAMES: { [key in College]: string } = {
  [College.ALL]: 'All Colleges Overview',
  [College.BIET]: 'BIET - Big Institute of Engineering and Technology',
  [College.BGIIT]: 'BGIIT - Brilliant Institute of Engineering and Technology',
  [College.KNRCER]: 'KNRCER - Kasireddy Narayanreddy College of Engineering',
};

export const MOCK_USERS: User[] = [
    // Chairman
    { id: 'CHAIRMAN01', name: 'Dr. Chairman', email: 'chairman@edu.com', password: 'password123', role: Role.CHAIRMAN, college: null },
    
    // HOD
    { id: 'dharmaraj', name: 'Dr. Dharmaraj', email: 'dharmaraj.hod@edu.com', password: 'password123', role: Role.HOD, college: College.BIET },

    // Faculty
    { id: 'BCSE01032020-001', name: 'Prof. B. Verma', email: 'faculty.biet@edu.com', password: 'password123', role: Role.FACULTY, college: College.BIET },
    { id: 'GECE15022020-001', name: 'Prof. G. Reddy', email: 'faculty.bgiit@edu.com', password: 'password123', role: Role.FACULTY, college: College.BGIIT },

    // Staff
    { id: 'KSTF15042020-001', name: 'Mr. A. Kumar', email: 'staff.knrcer@edu.com', password: 'password123', role: Role.STAFF, college: College.KNRCER },
];


export const DEPARTMENTS = [
    'CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'HS', 'CSM', 'CSD', 'CSC'
];

export const LATEST_ATTENDANCE_DATE = '2025-09-15';