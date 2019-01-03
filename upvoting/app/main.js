new Vue({
    el: "#app",
    data: {
        submission: submissions
    },
    computed: {
        sortedSubmissions () {
            return this.submission.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    }
})