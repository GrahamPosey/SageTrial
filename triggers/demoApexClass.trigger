trigger demoApexClass on Lead (before insert, before update) {
    system.debug('Demo');
}