import { createApp } from './main'

// eslint-disable-next-line arrow-body-style
export default (context) => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()

        router.push(context.url)

        router.onReady(() => {
            // eslint-disable-next-line no-param-reassign, no-return-assign
            context.rendered = () => context.state = store.state

            const matchedComponents = router.getMatchedComponents()
            if (matchedComponents.length === 0) {
                // eslint-disable-next-line prefer-promise-reject-errors
                return reject({ code: 404 })
            }
            return resolve(app)
        }, reject)
    })
}
