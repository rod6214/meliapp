import { useContext } from 'react';
import { serviceContext } from './serviceContext';

export function useService() {
    return useContext(serviceContext);
}
