CREATE TABLE "Team" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

CREATE TABLE "Project" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "teamId" INTEGER,
    CONSTRAINT "Project_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable TeamMember (explicit join)
CREATE TABLE "TeamMember" (
    "id" SERIAL PRIMARY KEY,
    "teamId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleInTeam" TEXT,
    "joinedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TeamMember_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "TeamMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "TeamMember_teamId_userId_key" ON "TeamMember"("teamId", "userId");
