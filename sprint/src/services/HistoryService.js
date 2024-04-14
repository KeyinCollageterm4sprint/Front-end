class HistoryService {
    async getSearchHistory(userId) {
        try {
            const response = await fetch(`/api/history?userId=${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch search history');
            }
            return await response.json();
        } catch (error) {
            throw error;
        }
    }
}

export default new HistoryService();
