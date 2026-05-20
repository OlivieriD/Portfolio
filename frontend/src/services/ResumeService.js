import axiosInstance from '../api/axiosInstance';

const SUBDOMAIN = 'resume';

export const ResumeService = {
    getInfo: () => axiosInstance.get(`${SUBDOMAIN}/info`),
    upload: (formData) => axiosInstance.post(`${SUBDOMAIN}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }),
    uploadBilingual: (formData) => axiosInstance.post(`${SUBDOMAIN}/upload-bilingual`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }),
    updateMetadata: (data) => axiosInstance.put(`${SUBDOMAIN}/metadata`, data),
    delete: () => axiosInstance.delete(`${SUBDOMAIN}`),
    deleteBilingual: (language) => axiosInstance.delete(`${SUBDOMAIN}/${language}`),
    getDownloadUrl: (language = 'en') => `${axiosInstance.defaults.baseURL}/${SUBDOMAIN}/download?lang=${language}`,
    getViewUrl: (language = 'en') => `${axiosInstance.defaults.baseURL}/${SUBDOMAIN}/view?lang=${language}`,
};
