describe('c-demo-l-w-c-jest', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Simple Jest test for the demo video', () => {
        expect(2).toBe(2);
    });
});