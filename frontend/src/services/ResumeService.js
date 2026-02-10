import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = 'resume';

export const ResumeService = {
    getInfo: () => axiosInstance.get(`${SUBDOMAIN}/info`),
    upload: (formData) => axiosInstance.post(`${SUBDOMAIN}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }),
    delete: () => axiosInstance.delete(SUBDOMAIN),
    getDownloadUrl: () => `${axiosInstance.defaults.baseURL}/${SUBDOMAIN}/download`,
    getViewUrl: () => `${axiosInstance.defaults.baseURL}/${SUBDOMAIN}/view`,
};
