import { classNames } from 'shared/libs/classNames/classNames';

describe('classNames', () => {
    test('should return one class only', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toEqual(expected);
    });

    test('with optional modes', () => {
        const expected = 'someClass optional';
        expect(classNames('someClass', { optional: true })).toEqual(expected);
    });

    test('with optional modes false', () => {
        const expected = 'someClass optional';
        expect(classNames('someClass', {
            optional: true,
            test: false,
        })).toEqual(expected);
    });

    test('with optional modes undefined', () => {
        const expected = 'someClass';
        expect(classNames('someClass', { test: undefined })).toEqual(expected);
    });

    test('with additional classes', () => {
        const expected = 'someClass additionalClass';
        expect(
            classNames('someClass', {}, ['additionalClass']),
        ).toEqual(expected);
    });

    test('with optional modes and additional classes', () => {
        const expected = 'someClass optional additionalClass';
        expect(
            classNames('someClass', { optional: true }, ['additionalClass']),
        ).toEqual(expected);
    });
});
