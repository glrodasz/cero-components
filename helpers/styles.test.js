import { getDynamicClasses, getModuleClasses } from './styles'

const stylesModuleMock = {
  ['size-sm']: '.xyz_size_sm',
  ['color-red']: '.xyz_color_red',
}
const propsMock = { size: 'sm', color: 'red' }

describe('[ helpers / styles ]', () => {
  describe('#getDynamicClasses', () => {
    describe('when `arg` is an array of classes with the all `props` matching', () => {
      it('should returns the classes with the `stylesModule` with the `prop` value', () => {
        // given
        const argMock = ['size', 'color']
        // when
        const result = getDynamicClasses(stylesModuleMock, propsMock, argMock)
        // then
        const expected = { '.xyz_size_sm': 'sm', '.xyz_color_red': 'red' }

        expect(result).toEqual(expected)
      })
    })

    describe('when `arg` is an array of classes with `props` not matching', () => {
      it('should returns an empty object', () => {
        // given
        const argMock = ['type', 'width']
        // when
        const result = getDynamicClasses(stylesModuleMock, propsMock, argMock)
        // then
        const expected = {}

        expect(result).toEqual(expected)
      })
    })

    describe('when `arg` is an array of classes with the some `props` matching', () => {
      it('should returns the classes with the `stylesModule` than match with the `prop` value', () => {
        // given
        const argMock = ['type', 'color']

        // when
        const result = getDynamicClasses(stylesModuleMock, propsMock, argMock)
        // then
        const expected = { '.xyz_color_red': 'red' }

        expect(result).toEqual(expected)
      })
    })
  })

  describe('#getModuleClasses', () => {
    describe('when `stylesModule` contains `arg`', () => {
      it('should returns `stylesModule.arg` value', () => {
        // given
        const argMock = 'size-sm'
        // when
        const result = getModuleClasses(stylesModuleMock, argMock)
        // then
        const expected = '.xyz_size_sm'

        expect(result).toBe(expected)
      })
    })
    describe("when `stylesModule` doesn't contain `arg`", () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'type-primary'
        // when
        const result = getModuleClasses(stylesModuleMock, argMock)
        // then
        const expected = 'type-primary'

        expect(result).toBe(expected)
      })
    })

    describe('when `stylesModule` is undefined', () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'size-sm'
        // when
        const result = getModuleClasses(undefined, argMock)
        // then
        const expected = 'size-sm'

        expect(result).toBe(expected)
      })
    })

    describe('when `stylesModule` is null', () => {
      it('should returns `arg` value', () => {
        // given
        const argMock = 'size-sm'
        // when
        const result = getModuleClasses(null, argMock)
        // then
        const expected = 'size-sm'

        expect(result).toBe(expected)
      })
    })
  })

  // TODO: describe('#getObjectClasses', () => {})

  // TODO: describe('#getClasses', () => {})
})
