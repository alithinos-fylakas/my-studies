
def concatenate(str_i):
    final_value = str_i
    def inner(v_to_concat):
        nonlocal final_value
        final_value += v_to_concat
        return final_value
    return inner

c = concatenate('a')
print(c('b'))
print(c('c'))
print(c('d'))
print(c('e'))
print(c('f'))