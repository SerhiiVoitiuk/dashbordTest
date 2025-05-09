'use server';

import path from 'path';
import fs from 'fs';

export async function getPoliciesData() {
  try {
    const filePath = path.resolve('data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData.policies;
  } catch (error) {
    console.error('Error reading data.json:', error);
    return [];
  }
}

export async function getWorkData() {
  try {
    const filePath = path.resolve('data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData.work;
  } catch (error) {
    console.error('Error reading data.json:', error);
    return [];
  }
}

export async function getAccountsData() {
  try {
    const filePath = path.resolve('data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData.accounts;
  } catch (error) {
    console.error('Error reading data.json:', error);
    return [];
  }
}