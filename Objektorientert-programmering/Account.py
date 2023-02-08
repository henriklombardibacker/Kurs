class Konto:
    rente = 1
    def __init__(self, kontotype, kontoID, balanse):
        self.kontotype = kontotype
        self.kontoID = kontoID
        self.balanse = balanse



    def setKontotype(self, kontotype):
        self.kontotype = kontotype
    def getKontotype(self):
        return self.kontotype


    def setKontoID(self, kontoID):
        self.kontoID = kontoID
    def getKontoID(self):
        return self.kontoID


    def setBalanse(self, balanse):
        self.balanse = balanse
    def getBalanse(self):
        return self.balanse


første_konto = Konto("Bankkonto", 50923498, 50000)
akonto = Konto("BSU", 5094, 50000)
tkonto = Konto("Index", 234, 9000)
fkonto = Konto("Fortnite", 8545, 4000)

print("\n""\n")
print(første_konto.kontotype)
print(første_konto.kontoID)
print(første_konto.balanse)
print("\n")
print("\n")

print(første_konto.getKontotype())
print(første_konto.getKontoID())
print(første_konto.getBalanse())
print("\n""\n")
print("I made a grave mistake")