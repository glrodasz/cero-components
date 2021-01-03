import { getTemplate } from './storybook'

jest.mock('./styles', () => ({
  getClasses: (a) => (b) => ({ ...a, ...b }),
}))

describe('[ helpers / storybook ]', () => {
  describe('#getTemplate', () => {
    describe('when `Component`, `styles`, and `args` are provided', () => {
      it('should return a `Component` with `defaultProps`, `styles` and `args`', () => {
        // given
        const Component = (props) => ({ props })
        Component.defaultProps = { defaultProps: 'defaultProps', foo: 'bar' }

        const styles = { styles: 'styles' }
        const args = { args: 'args', foo: 'foo' }

        // when
        const result = getTemplate(Component, styles)(args)

        // then
        expect(result).toMatchInlineSnapshot(`
          <Component
            args="args"
            defaultProps="defaultProps"
            foo="foo"
            getStyles={
              Object {
                "args": "args",
                "defaultProps": "defaultProps",
                "foo": "foo",
                "styles": "styles",
              }
            }
          />
        `)
      })
    })
  })
})
