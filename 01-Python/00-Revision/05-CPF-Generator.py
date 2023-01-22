
# Test for CPF: 746.824.890.70

def collect9CPF(cpf: str) -> list:
    lcpf = []
    for n in cpf:
        if len(lcpf) > 8:
            break
        if n.isalnum():
            lcpf.append(int(n))
    return lcpf

def regressiveMC(lcpf: list, regressive: int) -> list:
    mult_lcpf = []
    regressive = regressive
    for n in lcpf:
        mult_lcpf.append( (n * regressive) )
        regressive -= 1
    return mult_lcpf

def sumAll(m_lcpf: list) -> int:
    sum = 0
    for n in m_lcpf:
        sum += n
    return sum

def multiBy10(num: int) -> int:
    return num * 10

def remainderBy11(num: int) -> int:
    remainder = num % 11
    return 0 if remainder > 9 else num % 11

def firstDigit(cpf: str) -> int:
    lcpf = collect9CPF(cpf)
    m_lcpf = regressiveMC(lcpf, 10)
    add = sumAll(m_lcpf)
    multi = multiBy10(add)
    remainder = remainderBy11(multi)
    return remainder if remainder == lcpf[0] else "Invalid cpf"

def secondDigit(cpf: str) -> int:
    lcpf = collect9CPF(cpf)
    lcpf.append(int(cpf[0]))
    m_lcpf = regressiveMC(lcpf, 11)
    add = sumAll(m_lcpf)
    multi = multiBy10(add)
    remainder = remainderBy11(multi)
    return remainder if remainder == int(cpf[-1]) else "Invalid cpf"

def main():
    cpf = "746.824.890.70"
    print(firstDigit(cpf))
    print(secondDigit(cpf))

if __name__ == "__main__":
    main()