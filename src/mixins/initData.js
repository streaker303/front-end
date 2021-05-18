export default {
    data() {
        return {
            loading: true, tableData: [], page: 1, size: 20, total: 0, params: {}, query: { age: 12 }
        }
    },
    methods: {
        pageChange(e) {
            this.page = e
            this.init()
        },
        sizeChange(e) {
            this.size = e
            this.init()
        }
    }
}
