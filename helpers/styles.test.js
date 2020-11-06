import { getDynamicClasses, getModuleClasses, getObjectClasses } from './styles'

const cssModuleMock = {
  ['size-sm']: '.xyz_size_sm',
  ['color-red']: '.xyz_color_red',
  ['is-editable']: '.xyz_is_editable',
  ['is-inverted']: '.xyz_is_inverted',
}
const propsMock = { size: 'sm', color: 'red' }

describe('[ helpers / styles ]', () => {
  describe('#getDynamicClasses', () => {
    describe('when all `props` match the `classes` array', () => {
      it('should return the dynamic classes', () => {
        // given
        const args = ['size', 'color']
        // when
        const result = getDynamicClasses(cssModuleMock, propsMock, args)
        // then
        const expected = { '.xyz_size_sm': 'sm', '.xyz_color_red': 'red' }

        expect(result).toStrictEqual(expected)
      })
    })

    describe("when all `props` doesn't match the `classes` array", () => {
      it('should return an empty object', () => {
        // given
        const args = ['type', 'width']
        // when
        const result = getDynamicClasses(cssModuleMock, propsMock, args)
        // then
        const expected = {}

        expect(result).toStrictEqual(expected)
      })
    })

    describe('when some `props` match the `array` classes', () => {
      it('should return the dynamic classes', () => {
        // given
        const args = ['type', 'color']

        // when
        const result = getDynamicClasses(cssModuleMock, propsMock, args)
        // then
        const expected = { '.xyz_color_red': 'red' }

        expect(result).toStrictEqual(expected)
      })
    })
  })

  describe('#getModuleClasses', () => {
    describe('when `cssModule` contains the `classKey`', () => {
      it('should return the module class', () => {
        // given
        const args = 'size-sm'
        // when
        const result = getModuleClasses(cssModuleMock, args)
        // then
        const expected = '.xyz_size_sm'

        expect(result).toBe(expected)
      })
    })
    describe("when `cssModule` doesn't contain the `classKey`", () => {
      it('should return the `classKey`', () => {
        // given
        const args = 'type-primary'
        // when
        const result = getModuleClasses(cssModuleMock, args)
        // then
        const expected = 'type-primary'

        expect(result).toBe(expected)
      })
    })

    describe('when `cssModule` is undefined', () => {
      it('should return the `classKey`', () => {
        // given
        const args = 'size-sm'
        // when
        const result = getModuleClasses(undefined, args)
        // then
        const expected = 'size-sm'

        expect(result).toBe(expected)
      })
    })

    describe('when `cssModule` is null', () => {
      it('should return the `classKey`', () => {
        // given
        const args = 'size-sm'
        // when
        const result = getModuleClasses(null, args)
        // then
        const expected = 'size-sm'

        expect(result).toBe(expected)
      })
    })
  })

  describe('#getObjectClasses', () => {
    describe('when `cssModule` and `object` is provided', () => {
      it('should return the object class', () => {
        // given
        const args = { 'is-editable': true, 'is-inverted': false }
        // when
        const result = getObjectClasses(cssModuleMock, args)
        // then
        const expected = { '.xyz_is_editable': true, '.xyz_is_inverted': false }

        expect(result).toStrictEqual(expected)
      })
    })

    describe("when the `object` doesn't match any `cssModule` class", () => {
      it('should return an empty object', () => {
        // given
        const args = { 'is-block': true, 'is-inline': false }
        // when
        const result = getObjectClasses(cssModuleMock, args)
        // then
        const expected = {}

        expect(result).toStrictEqual(expected)
      })
    })

    describe('when `object` is empty', () => {
      it('should return an empty object', () => {
        // given
        const args = {}
        // when
        const result = getObjectClasses(cssModuleMock, args)
        // then
        const expected = {}

        expect(result).toStrictEqual(expected)
      })
    })
  })

  // TODO: describe('#getClasses', () => {})
})
